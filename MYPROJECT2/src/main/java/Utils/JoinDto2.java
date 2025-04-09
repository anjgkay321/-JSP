package Utils;

public class JoinDto2 {
	private String teacher_code;
	private String class_name;
	private String teacher_name;
	private String tuition;
	
	public JoinDto2() {
		
	}

	public JoinDto2(String teacher_code, String class_name, String teacher_name, String tuition) {
		super();
		this.teacher_code = teacher_code;
		this.class_name = class_name;
		this.teacher_name = teacher_name;
		this.tuition = tuition;
	}

	@Override
	public String toString() {
		return "JoinDto2 [teacher_code=" + teacher_code + ", class_name=" + class_name + ", teacher_name="
				+ teacher_name + ", tuition=" + tuition + "]";
	}

	public String getTeacher_code() {
		return teacher_code;
	}

	public void setTeacher_code(String teacher_code) {
		this.teacher_code = teacher_code;
	}

	public String getClass_name() {
		return class_name;
	}

	public void setClass_name(String class_name) {
		this.class_name = class_name;
	}

	public String getTeacher_name() {
		return teacher_name;
	}

	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}

	public String getTuition() {
		return tuition;
	}

	public void setTuition(String tuition) {
		this.tuition = tuition;
	}
	
}
