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
        StringBuilder sb = new StringBuilder();
        for(int i = 0; i < date.length(); i++) {
            char ch = date.charAt(i);
            if(ch == '\n' || ch == '\t' || ch == ' ' || ch == '\f' || ch == '\r') continue;
            sb.append(ch);
        }
        date = sb.toString();
        System.out.println("date = " + date);
        String level = levelList.isEmpty() ? null : "("+levelList.get(0);
        for (int i = 1; i < levelList.size(); i++) {
            // level += "\\|" + levelList.get(i);
            level += "|" + levelList.get(i);
        }
        if(!levelList.isEmpty()) level += ")";
        String command = "";
        // String command = "grep -i \"" + keyword + "\" _data/RULEmgrlog" + date + '*';
        if (level != null) {
            command += "grep -E \'\\b"+level+"\\b\' _data/RULEmgrlog" + date + "*" + " | grep -i \"" + keyword + "\"";
            // command += "| grep -i \"" + level + "\"";
        }
        else{
            command += "grep -i \"" + keyword + "\" _data/RULEmgrlog" + date + '*';
        }
        log.info("command : {}", command);
        return command;
    }
}
