package com.ksol.mesc.domain.log.service;

import com.ksol.mesc.global.util.SSHUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LogServiceImpl implements LogSerivce {

    private final SSHUtil sshUtil;

    @Override
    public String getLogs(String command) {
        String result = "";
        try {
            result = sshUtil.command(command);
        } catch (Exception e) {
            log.info(e.getMessage());
        }
        return result;
    }

    @Override
    public String getCommand(String keyword, String date, List<String> levelList) {
        String level = levelList.isEmpty() ? null : levelList.get(0);
        for (int i = 1; i < levelList.size(); i++) {
            level += "\\|" + levelList.get(i);
        }
        String command = "grep -n -i \"" + keyword + "\" \"mes_backend_dev/BE/mes/logs/RULEmgrlog" + date + "\"";
        if (level != null) {
            command += "| grep -n -i \"" + level + "\"";
        }
        return command;
    }
}
