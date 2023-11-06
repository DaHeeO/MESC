package com.ksol.mesc.domain.log.service;

import java.util.List;

public interface LogSerivce {
    public String getLogs(String keyword, String date, List<String> levelList);
}
