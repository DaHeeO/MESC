package mesc.mesc.block.repository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mesc.mesc.block.domain.Block;
import mesc.mesc.button.domain.Button;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
@Slf4j
public class BlockRepositoryImpl implements BlockRepository {

    private final EntityManager em;

    @Override
    public Block findBlock(Integer blockId) {
        Block block = em.find(Block.class, blockId);
        if(block != null) {
            block.setButtons(em.createQuery("select bt from Button bt where bt.block.id = :blockId", Button.class)
                    .setParameter("blockId", blockId).getResultList());
        }
        return block;
    }
}
