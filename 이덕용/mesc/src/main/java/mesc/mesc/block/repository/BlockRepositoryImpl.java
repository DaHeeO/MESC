package mesc.mesc.block.repository;

import jakarta.persistence.Query;
import jakarta.persistence.Tuple;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import mesc.mesc.block.domain.Block;
import mesc.mesc.button.domain.Button;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;

import java.sql.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

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

    @Override
    public List<Map<String, String>> hmmm() {
        Connection connection = em.unwrap(Connection.class);

        Statement statement = null;
        try {
            statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery("select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID");
            ResultSetMetaData metaData = resultSet.getMetaData();
            int columnCount = metaData.getColumnCount();
            for(int i = 0; i < columnCount; i++) {
                System.out.println("Table: " + metaData.getTableName(i));
                System.out.println(metaData.getColumnName(i) + ": " + metaData.getColumnLabel(i));
                System.out.println("자바 유형: " + metaData.getColumnClassName(i));
                System.out.println("데이터 유형: " + metaData.getColumnTypeName(i));
                System.out.println("SQL 유형: " + metaData.getColumnTypeName(i));
                // null 허용 여부 이런거 다 가능한듯?
            }
//            while (resultSet.next()) {
//                resultSet.
//                int id = resultSet.getInt("id");
//                String name = resultSet.getString("name");
//                // 결과 처리
//            }

            resultSet.close();
            statement.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

//        String nativeQuery = "select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID";
//        Query query = em.createNativeQuery(nativeQuery);
//
//        List<Object[]> resultList = query.getResultList();
//        for (Object[] row : resultList) {
//            Integer id = (Integer) row[0];
//            String name = (String) row[1];
//            Double salary = (Double) row[2];
//
//            // 결과를 처리
//        }
//        em.createNativeQuery("select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID", Tuple.class)
//                .getResultStream()
//                .collect(
//                        Collectors.toMap(
//                                tuple -> tuple.get("year")
//                        )
//                )
//        Map<String, Object> stringObjectMap = resultList.get(0);
//        stringObjectMap.keySet().stream().forEach(k -> System.out.println("k = " + k));
//        System.out.println("resultList.size() = " + resultList.size());
        return null;
    }
}
