package springapp;
import org.springframework.data.jpa.repository.JpaRepository;

import io.springapp.entity.Room;

public interface RoomRepository extends  JpaRepository<Room,Integer>{

}
