<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: qwerty
  Date: 04.03.2017
  Time: 13:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h3><a href="/newUser">New User</a></h3>
<table border="1">
    <th>id</th>
    <th>firstname</th>
    <th>lastname</th>
    <th>birthday</th>
    <th>city</th>
    <th>email</th>
    <th>password</th>
    <th>gender</th>
    <th>info</th>
    <th>role</th>
    <th>user_photo</th>
    <c:forEach var="user" items="${listUsers}" varStatus="status">
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.birthday}</td>
            <td>${user.city.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.gender.gender}</td>
            <td>${user.info}</td>
            <td>${user.role.name}</td>
            <td>${user.userPhoto}</td>
            <td><a href="/getUsers?id=${user.id}">Edit</a></td>
            <td><a href="/deleteUser?id=${user.id}">Delete</a></td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
