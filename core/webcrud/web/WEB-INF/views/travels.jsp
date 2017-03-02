<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: qwerty
  Date: 02.03.2017
  Time: 10:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
</head>
<body>
<center>
    <h3><a href="/newTravel">New Travel</a></h3>
    <table border="1">
        <th>id</th>
        <th>name</th>
        <th>startDate</th>
        <th>endDate</th>
        <th>info</th>
        <th>active</th>
        <c:forEach var="travel" items="${listTravels}" varStatus="status">
            <tr>
                <td>${travel.id}</td>
                <td>${travel.name}</td>
                <td>${travel.startDate}</td>
                <td>${travel.endDate}</td>
                <td>${travel.info}</td>
                <td>${travel.active}</td>
                <td><a href="/getTravels?id=${travel.id}">Edit</a></td>
                <td><a href="/deleteTravel?id=${travel.id}">Delete</a></td>
            </tr>
        </c:forEach>
    </table>
</center>
</body>
</html>
