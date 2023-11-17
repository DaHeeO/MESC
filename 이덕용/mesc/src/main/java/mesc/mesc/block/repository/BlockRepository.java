package mesc.mesc.block.repository;


import mesc.mesc.block.domain.Block;

import java.util.List;
import java.util.Map;

public interface BlockRepository {
    public Block findBlock(Integer blockId);

    public List<Map<String, String>> hmmm();
}
