
package springapp;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Room {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private int roomID;
	private int roomNo;
	private String type;
	private String price;
	private String status;
	public Room() {
		
	}
	
	
	
	
	
	public Room(int roomNo, String type, String price, String status) {
		super();
		this.roomNo = roomNo;
		this.type = type;
		this.price = price;
		this.status = status;
	}
	public int getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
	
	
	
}
