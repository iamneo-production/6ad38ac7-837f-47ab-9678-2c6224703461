
package springapp;
import org.springframework.data.jpa.repository.JpaRepository;

import io.springapp.entity.Admin;
import io.springapp.entity.RoomsUnderAdmin;

public interface AdminRepository extends JpaRepository<Admin,Integer>{

	Admin save(Class<? extends RoomsUnderAdmin> class1);

}
