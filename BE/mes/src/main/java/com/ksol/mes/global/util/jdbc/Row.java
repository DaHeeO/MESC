package com.ksol.mes.global.util.jdbc;

import java.util.ArrayList;
import java.util.List;

import lombok.ToString;

@ToString
public class Row {
    private List<String> dataList = new ArrayList<>();

    public List<String> getDataList() {
        return dataList;
    }
}
