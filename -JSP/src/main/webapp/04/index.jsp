<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
:root {
	
}

* {
/* 	border: 1px solid; */
box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
}
ul{list-style: none;margin: 0;padding: 0;}
a{text-decoration: none; color:black;}
.wrapper {
	
}

.wrapper>header {
	height: 80px;
}

.wrapper>nav {
	height: 50px;
}

.wrapper>main {
	height: calc(100vh - 80px - 50px - 80px);
}

.wrapper>main>h2 {
	text-align: center;
	font-size: 1.8rem;
	font-weight: 400;
}
.wrapper>main>table {
	border: 1px solid;
	border-collapse: collapse;
	min-width: 500px;
	min-height: 30px;
	margin: 0 auto;
}

.wrapper>main table th, .wrapper>main table td {
	min-width: 80px !important;
	min-height: 20px !important;
	border: 1px solid;
	text-align: center;
}
.wrapper>footer {
	height: 80px;
}
</style>
</head>
<body>
<%@page import="Utils.*,java.util.*" %>
	<%
		List<MemberDto> list = DBUtils.getInstance().AllMember();
	%>
	<div class="wrapper">
		<!--  -->
		<%@include file="/layouts/Header.jsp" %>
		
		<%@include file="/layouts/Nav.jsp" %>
	
		<main>
			<h2>후보자등수</h2>
			<table>
				<tr>
					<th>후보번호</th>
					<th>성명</th>
					<th>총투표건수</th>
				</tr>
				<%
					for(MemberDto dto : list){
				%>
				<tr>
					<th><%=dto.getM_no() %></th>
					<th><%=dto.getM_name() %></th>
					<th><%=dto.getCount() %></th>
				</tr>
				<%} %>
				
			</table>
		</main>

		<%@include file="/layouts/Footer.jsp" %> 
		
	</div>

</body>
</html>