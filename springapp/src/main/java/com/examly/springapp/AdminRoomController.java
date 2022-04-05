package springapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.springapp.entity.Admin;
import io.springapp.entity.Room;
import io.springapp.entity.RoomsUnderAdmin;
import io.springapp.repository.AdminRepository;
import io.springapp.repository.RoomRepository;

@RestController
public class AdminRoomController {
	
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private RoomRepository roomRepository;
	
	
	@RequestMapping(method=RequestMethod.POST,value="/admin/addRoom")
	public Admin addRooms(@RequestBody RoomsUnderAdmin  request) {
		
		return adminRepository.save(request.getClass());
	}
	
	@RequestMapping(value="/admin/Dashboard")
	public List<Admin> findAllRooms(){
		return adminRepository.findAll();
	}
	
}
