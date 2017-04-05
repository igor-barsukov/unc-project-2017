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
<form:form action="saveUser"  method="post" modelAttribute="user">
    <table>
        <form:hidden path="id"/>
        <tr>
            <td>first_name:</td>
            <td><form:input path="firstName" /></td>
        </tr>
        <tr>
            <td>last_name:</td>
            <td><form:input path="lastName" /></td>
            </tr>
        <tr>
            <td>birthday:</td>
            <td><form:input type="date" path="birthday" /></td>
        </tr>
        <tr>
            <td>cityID:</td>
            <td><form:input path="city.id" /></td>
        </tr>

        <tr>
            <td>password:</td>
            <td><form:input path="password" /></td>
        </tr>
        <tr>
            <td>email:</td>
            <td><form:input path="email" /></td>
        </tr>
        <tr>
            <td>gender:</td>
            <td><form:input path="gender.id" /></td>
        </tr>
        <tr>
            <td>info:</td>
            <td><form:input path="info" /></td>
        </tr>
        <tr>
            <td>roleID:</td>
            <td><form:input path="role.id" /></td>
        </tr>
        <tr>
            <td>user_photo:</td>
            <td><form:input path="userPhoto" /></td>
        </tr>
        <tr>
            <td colspan="2" align="center"><input type="submit" value="Save"></td>
        </tr>
    </table>
</form:form>
</body>
</html>
