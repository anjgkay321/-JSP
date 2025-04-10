package Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class OracleDBUtils {
	
	private String url = "jdbc:oracle:thin:@localhost:1521:xe";
	private String id = "system";
	private String pw = "1234";
	
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;	
	
	//싱글톤 
	private static OracleDBUtils instance;
	private OracleDBUtils() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url, id, pw);
	}
	public static OracleDBUtils getInstance() throws Exception {
		if(instance==null)
			instance = new OracleDBUtils();
		return instance;
	}
	
	public int insertUser(UserDto userDto) throws SQLException {
		String sql="insert into tbl_user2 values (?,?,?)";
		pstmt = conn.prepareStatement(sql);
		
		pstmt.setString(1,userDto.getUsername());
		pstmt.setString(2, userDto.getPassword());
		pstmt.setString(3, userDto.getRole());
		int result = pstmt.executeUpdate();
		
		conn.commit();
		conn.close();
	
		
		return result;
		
	}
	public UserDto DateUserDto(UserDto userDto) throws SQLException{
		String sql="select * from tbl_user2 where username=? and where password=?";
		pstmt= conn.prepareStatement(sql);
		pstmt.setString(1,userDto.getUsername());
		pstmt.setString(2,userDto.getPassword());
		rs = pstmt.executeQuery();
		if(rs.next()) {
			UserDto dto = new UserDto();
			dto.setUsername(rs.getString(1));
			dto.setPassword(rs.getString(2));		
			return dto;
		}
		
		rs.close();
		pstmt.close();
		 
		return null;
		
	}
	public UserDto selectOne(String username) throws Exception {
		pstmt = conn.prepareStatement("select * from tbl_user2 where username=?");
		pstmt.setString(1, username);
		rs = pstmt.executeQuery();
		UserDto userDto = null;
		if(rs!=null) {
			rs.next();
			userDto = new UserDto(rs.getString(1),rs.getString(2),rs.getString(3));
		}
		return userDto;
	}

}







