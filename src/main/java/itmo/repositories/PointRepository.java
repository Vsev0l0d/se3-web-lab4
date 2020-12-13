package itmo.repositories;

import itmo.model.data.Point;
import itmo.model.data.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface PointRepository extends JpaRepository<Point, Long> {
    @Query("SELECT u FROM Point u WHERE u.user = ?1")
    Collection<Point> findAllUserPoints(User user);
}
