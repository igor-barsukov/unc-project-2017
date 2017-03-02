<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: qwerty
  Date: 02.03.2017
  Time: 15:56
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
</head>
<body>
<h3><a href="/newPlan">New Plan</a></h3>
<table border="1">
    <th>id</th>
    <th>name</th>
    <th>travelID</th>
    <th>startDate</th>
    <th>endDate</th>
    <th>info</th>
    <th>cityID</th>
    <th>active</th>
    <th>latitude</th>
    <th>longitude</th>
    <c:forEach var="plan" items="${listPlans}" varStatus="status">
        <tr>
            <td>${plan.id}</td>
            <td>${plan.name}</td>
            <td>${plan.travelID}</td>
            <td>${plan.startDate}</td>
            <td>${plan.endDate}</td>
            <td>${plan.info}</td>
            <td>${plan.cityID}</td>
            <td>${plan.active}</td>
            <td>${plan.latitude}</td>
            <td>${plan.longitude}</td>
            <td><a href="/getPlans?id=${plan.id}">Edit</a></td>
            <td><a href="/deletePlan?id=${plan.id}">Delete</a></td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
