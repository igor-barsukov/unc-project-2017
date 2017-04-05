<%--
  Created by IntelliJ IDEA.
  User: qwerty
  Date: 26.03.2017
  Time: 22:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="/login" method="POST">
    Enter UserName:	<input type="text" name="username"/><br/><br/>
    Enter Password: <input type="password" name="password"/> <br/><br/>
    <input type="submit" value="login"/>
    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
</form>
</body>
</html>
