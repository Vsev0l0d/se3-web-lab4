package itmo.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import itmo.model.Checker;
import itmo.model.data.Point;
import itmo.model.data.Views;
import itmo.repositories.PointRepository;
import itmo.repositories.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
public class PointController {
    private final PointRepository pointRepository;
    private final UserRepository userRepository;
    private final Checker checker;

    public PointController(PointRepository pointRepository, UserRepository userRepository, Checker checker) {
        this.pointRepository = pointRepository;
        this.userRepository = userRepository;
        this.checker = checker;
    }

    @GetMapping("/points")
    @JsonView(Views.Point.class)
    Collection<Point> allPoints() {
        return pointRepository.findAllUserPoints(userRepository.findByUsername("user"));
    }

    @PostMapping("/points")
    @JsonView(Views.Point.class)
    Collection<Point> newPoint(@RequestBody Collection<Point> newPoints) {
        List<Point> result = new ArrayList<>();
        for (Point newPoint : newPoints){
            if (checker.check(newPoint)){
                newPoint.setResult(checker.isInArea(newPoint));
                newPoint.setUser(userRepository.findByUsername("user"));
                result.add(pointRepository.save(newPoint));
            }
        }
        return result;
    }


    @GetMapping("/points/{r}")
    @JsonView(Views.Point.class)
    Collection<Point> allPointsRecalculation(@PathVariable Double r) {
        List<Point> recalculated = new ArrayList<>();
        Collection<Point> points = pointRepository.findAllUserPoints(userRepository.findByUsername("user"));

        for (Point p : points) {
            Point point = new Point(p.getX(), p.getY(), r, false);
            point.setResult(checker.isInArea(point));
            recalculated.add(point);
        }

        return recalculated;
    }

}
