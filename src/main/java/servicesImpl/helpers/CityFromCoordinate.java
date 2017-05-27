package servicesImpl.helpers;

import org.apache.commons.collections.map.HashedMap;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import java.util.Iterator;


public class CityFromCoordinate {

     private static JSONObject sendGet(String url) throws Exception {
         URL obj = new URL(url);
         HttpURLConnection con = (HttpURLConnection) obj.openConnection();

         con.setRequestMethod("GET");
         int responseCode = con.getResponseCode();
         BufferedReader in = new BufferedReader(
                 new InputStreamReader(con.getInputStream()));
         String inputLine;

         String response = "";

         while ((inputLine = in.readLine()) != null) {
             response+=inputLine;
         }
         in.close();

        return (JSONObject)new JSONParser().parse(response);

     }



    public static CityCountry getByCoordinates(Double x, Double y){
        final String baseUrl = "http://maps.googleapis.com/maps/api/geocode/json";

        final Map<String, String> params = new HashedMap();
        params.put("latlng", x.toString()+","+ y.toString() );
        final String url = baseUrl + '?' + "language=en&sensor=false";

        try {
            JSONObject response =sendGet(baseUrl+"?latlng="+x.toString()+","+ y.toString() + "&language=en&sensor=false");
            JSONArray results= (JSONArray) response.get("results");
            JSONObject res = (JSONObject) results.get(0);

            JSONArray addressComponents=(JSONArray) res.get("address_components");
            JSONObject component;
            Iterator iterator=addressComponents.iterator();
            CityCountry cityState=new CityCountry();
            while (iterator.hasNext())
            {
                component=(JSONObject)iterator.next();
                JSONArray types= (JSONArray) component.get("types");

                if (types.contains("locality"))
                      cityState.setCity(component.get("long_name").toString());

                if (types.contains("administrative_area_level_2"))
                 cityState.setCountry(component.get("long_name").toString());

            }

            if (cityState.getCity()==null)
            return  null;
            return cityState;
        }
        catch (Exception ex){
           ex.printStackTrace();
        }
     return null;

    }

}
