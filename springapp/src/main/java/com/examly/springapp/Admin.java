package springapp;

import java.util.ArrayList;
 
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "admin",
uniqueConstraints = {
    @UniqueConstraint(columnNames = "email")
})
@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Admin {
	
	private static final String targetEntity = null;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int admin_id;
	@Column(unique=true)
	private String email;
	@Column(unique=true)
	private String password;
	private String mobileNumber;
	private String sellerName;
	private String hotelName;
	private String hotelImageURL;
	private String hotelAddress;
	private int earnings;
	
	@OneToMany(targetEntity=Room.class,cascade=CascadeType.ALL)
	@JoinColumn(name="AR_fk",referencedColumnName="admin_id")
	private List<Room> roomsList;

	 
	
//	public Admin() {
//		
//	}
//	
//	
//	public Admin(int admin_id, String email, String password, String mobileNumber, String sellerName, String hotelName,
//			String hotelImageURL, String hotelAddress, int earnings) {
//		super();
//		this.admin_id = admin_id;
//		this.email = email;
//		this.password = password;
//		this.mobileNumber = mobileNumber;
//		this.sellerName = sellerName;
//		this.hotelName = hotelName;
//		this.hotelImageURL = hotelImageURL;
//		this.hotelAddress = hotelAddress;
//		this.earnings = earnings;
//	}
//	public int getAdmin_id() {
//		return admin_id;
//	}
//	public void setAdmin_id(int admin_id) {
//		this.admin_id = admin_id;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String email) {
//		this.email = email;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	public String getMobileNumber() {
//		return mobileNumber;
//	}
//	public void setMobileNumber(String mobileNumber) {
//		this.mobileNumber = mobileNumber;
//	}
//	public String getSellerName() {
//		return sellerName;
//	}
//	public void setSellerName(String sellerName) {
//		this.sellerName = sellerName;
//	}
//	public String getHotelName() {
//		return hotelName;
//	}
//	public void setHotelName(String hotelName) {
//		this.hotelName = hotelName;
//	}
//	public String getHotelImageURL() {
//		return hotelImageURL;
//	}
//	public void setHotelImageURL(String hotelImageURL) {
//		this.hotelImageURL = hotelImageURL;
//	}
//	public String getHotelAddress() {
//		return hotelAddress;
//	}
//	public void setHotelAddress(String hotelAddress) {
//		this.hotelAddress = hotelAddress;
//	}
//	public int getEarnings() {
//		return earnings;
//	}
//	public void setEarnings(int earnings) {
//		this.earnings = earnings;
//	}
	
	
	
	
	
	
	 
}