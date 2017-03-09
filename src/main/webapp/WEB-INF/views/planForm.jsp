<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%--
  Created by IntelliJ IDEA.
  User: qwerty
  Date: 04.03.2017
  Time: 13:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h1>New/Edit Travel</h1>
<form:form action="savePlan"  method="post" modelAttribute="plan">
    <table>
        <form:hidden path="id"/>
        <tr>
            <td>name:</td>
            <td><form:input path="name" /></td>
        </tr>
        <tr>
            <td>travelID:</td>
            <td><form:input path="travel.id" /></td>
        </tr>
        <tr>
            <td>startDate:</td>
            <td><form:input  type="date" path="startDate" /></td>
        </tr>
        <tr>
            <td>endDate:</td>
            <td><form:input  type="date" path="endDate" /></td>
        </tr>
        <tr>
            <td>info:</td>
            <td><form:input path="info" /></td>
        </tr>
        <tr>
            <td>cityID:</td>
            <td><form:input path="city.id" /></td>
        </tr>
        <tr>
            <td>active:</td>
            <td><form:input path="active" /></td>
        </tr>
        <tr>
            <td>latitude:</td>
            <td><form:input path="latitude" /></td>
        </tr>
        <tr>
            <td>longitude:</td>
            <td><form:input path="longitude" /></td>
        </tr>
        <tr>
            <td colspan="2" align="center"><input type="submit" value="Save"></td>
        </tr>
    </table>
</form:form>
</body>
</html>
