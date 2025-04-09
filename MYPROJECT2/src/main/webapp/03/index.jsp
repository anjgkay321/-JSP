<%@page import="java.text.DecimalFormat"%>
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

html {
	
}

* {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	color: black;
}

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
	overflow:auto;
}

.wrapper>main h2 {
	text-align: center;
	font-size: 1.8rem;
	font-weight: 400;
}

.wrapper>main table {
	border: 1px solid;
	border-collapse: collapse;
	min-width: 500px;
	min-height: 350px;
	margin: 0 auto;
}

.wrapper>main table th, .wrapper>main table td {
	min-width: 80px !important;
	min-height: 25px !important;
	border: 1px solid;
	text-align: center;
}

.wrapper>main table th {
	background-color: lightgray;
}

.wrapper>footer {
	height: 80px;
}
</style>


</head>
<body>
	<%@page import="Utils.*,java.util.*,java.time.LocalDate,java.time.format.DateTimeFormatter" %>
	<%
		//모든 회원정보 가져오기
		List<JoinDto>	list = DBUtils.getInstance().selectAllJoin1();

	%>

	
	<div class="wrapper">
		<!--  -->
		<%@include file="/layouts/Header.jsp" %>
		
		<!--  -->
		<%@include file="/layouts/Nav.jsp" %>
		
		<main>

		
			<h2>회원정보조회</h2>
			<table>
				<tr>
					<th>수강월</th>
					<th>회원번호</th>
					<th>회원명</th>
					<th>강의명</th>
					<th>강의장소</th>
					<th>수강료</th>
					<th>등급</th>
				</tr>
				<%
					for(JoinDto dto : list){
				%>
				
				<tr>
					<%-- <td><%=dto.getRegist_month() %></td> --%>
					<%
					String date = dto.getRegist_month();
					String yy =date.substring(0,4);
					String mm = date.substring(4,6);
					out.println("<td>"+yy + "년"+mm+"월</td>");
					
					%>
					<td><%=dto.getC_no() %></td>
					<td><%=dto.getC_name() %></td>
					<td><%=dto.getClass_name() %></td>
					<td><%=dto.getClass_area() %></td>
					<%-- <td><%=dto.getTuition() %></td> --%>
					<%
					String price= dto.getTuition();
					int iprice = Integer.parseInt(price);
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					DecimalFormat formatter =new DecimalFormat("\\#,###");
					out.println("<td>"+formatter.format(iprice)+ "</td>");
					%>
					<td><%=dto.getGrade() %></td>
				</tr>
				<%
					}
				%>
			</table>
		</main>
		
		<!--  -->
		<%@include file="/layouts/Footer.jsp" %>
	
	</div>

</body>
</html>