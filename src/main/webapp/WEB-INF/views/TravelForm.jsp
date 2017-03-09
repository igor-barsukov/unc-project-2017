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
<center>
    <h1>New/Edit Travel</h1>
    <form:form action="saveTravel"  method="post" modelAttribute="travel">
        <table>
            <form:hidden path="id"/>
            <tr>
                <td>Name:</td>
                <td><form:input path="name" /></td>
            </tr>
            <tr>
                <td>startDate:</td>
                <td><form:input  type="date" path="startDate" /></td>
            </tr>
            <tr>
                <td>endDAte:</td>
                <td><form:input  type="date" path="endDate" /></td>
            </tr>
            <tr>
                <td>info:</td>
                <td><form:input path="info" /></td>
            </tr>
            <tr>
                <td>active:</td>
                <td><form:input path="active" /></td>
            </tr>
            <tr>
                <td colspan="2" align="center"><input type="submit" value="Save"></td>
            </tr>
        </table>
    </form:form>
</center>
</body>
</html>
