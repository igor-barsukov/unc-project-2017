<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

  Created by IntelliJ IDEA.
  User: qwerty
  Date: 16.02.2017
  Time: 23:51
  To change this template use File | Settings | File Templates.

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"

         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<body>
<h3><a href="/users">User List</a></h3>
<h3><a href="/travels">Travels List</a></h3>
<h3><a href="/plans">Plans List</a></h3>
</body>
</html>
--%>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Uncproject</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_csrf" content="${_csrf.token}"/>
    <meta name="_csrf_header" content="${_csrf.headerName}"/>
</head>
<body>
<app-root>
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw "></i>
    </div>
</app-root>
<script type="text/javascript" src="js/inline.bundle.js"></script><script type="text/javascript" src="js/polyfills.bundle.js"></script><script type="text/javascript" src="js/scripts.bundle.js"></script><script type="text/javascript" src="js/styles.bundle.js"></script><script type="text/javascript" src="js/vendor.bundle.js"></script><script type="text/javascript" src="js/main.bundle.js"></script></body>
</html>
