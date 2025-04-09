package Utils;

public class JoinDto {
    private int resvNo;
    private String jumin;
    private String vcode;
    private String hospCode;
    private String resvDate;
    private int resvTime;
    
    public JoinDto() {
    	
    }

	public JoinDto(int resvNo, String jumin, String vcode, String hospCode, String resvDate, int resvTime) {
		super();
		this.resvNo = resvNo;
		this.jumin = jumin;
		this.vcode = vcode;
		this.hospCode = hospCode;
		this.resvDate = resvDate;
		this.resvTime = resvTime;
	}

	@Override
	public String toString() {
		return "JoinDto [resvNo=" + resvNo + ", jumin=" + jumin + ", vcode=" + vcode + ", hospCode=" + hospCode
				+ ", resvDate=" + resvDate + ", resvTime=" + resvTime + "]";
	}

	public int getResvNo() {
		return resvNo;
	}

	public void setResvNo(int resvNo) {
		this.resvNo = resvNo;
	}

	public String getJumin() {
		return jumin;
	}

	public void setJumin(String jumin) {
		this.jumin = jumin;
	}

	public String getVcode() {
		return vcode;
	}

	public void setVcode(String vcode) {
		this.vcode = vcode;
	}

	public String getHospCode() {
		return hospCode;
	}

	public void setHospCode(String hospCode) {
		this.hospCode = hospCode;
	}

	public String getResvDate() {
		return resvDate;
	}

	public void setResvDate(String resvDate) {
		this.resvDate = resvDate;
	}

	public int getResvTime() {
		return resvTime;
	}

	public void setResvTime(int resvTime) {
		this.resvTime = resvTime;
	}
    
}
