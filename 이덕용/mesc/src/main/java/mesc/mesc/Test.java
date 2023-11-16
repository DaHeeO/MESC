package mesc.mesc;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceUnit;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mesc.mesc.block.domain.Block;
import mesc.mesc.block.repository.BlockRepository;
import mesc.mesc.block.repository.BlockRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Scanner;

@Controller
@RequiredArgsConstructor
@Slf4j
public class Test {

    private final BlockRepository br;

    @GetMapping("")
    ResponseEntity<String> test() {
//        System.out.println("emf = " + emf);
//        EntityManager em = emf.createEntityManager();
//        BlockRepository br = new BlockRepositoryImpl(em);

        Scanner sc = new Scanner(System.in);

        Block block = br.findBlock(1);
        printBlock(block);
        while(true) {
            int next = sc.nextInt();
            if (next == 55) {
                br.hmmm();
               continue;
            }
            if (next == 100)
                break;
            block = br.findBlock(Integer.parseInt(block.getButtons().get(next).getLink()));
            printBlock(block);
        }
        return null;
    }

    static void printBlock(Block block) {
        System.out.println("----------------------------------------------------");
        System.out.println(block.getBlText());
        int index = 0;
        block.getButtons().forEach(b -> System.out.println("버튼" + b.getSequence() + ": " + b.getButtonName()));
        System.out.println("버튼 번호 입력: ");
    }
}
