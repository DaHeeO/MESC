package com.ksol.mesc.global.util;

import com.jcraft.jsch.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

@Slf4j
@Component
public class SSHUtil {
    private static final String HOST = "www.mescadmin.kr";
    private static final String USER = "chatbot";
    private static final String PASSWORD = "ksol1117";
    private static final Integer PORT = 1117;

    public String command(String command) throws Exception {
        Properties config = new Properties();
        config.put("StrictHostKeyChecking", "no");
        Session session = null;
        try {
            session = getSession(config);
        } catch (JSchException e) {
            if(session != null) {
                session.disconnect();
            }
            log.info("session 생성 실패");
            throw new Exception();
        }
        String result = getResult(command, session);
        log.info("sshResult : {}", result);
        session.disconnect();
        return result;
    }

    private String getResult(String command, Session session) throws Exception {
        Channel channel= null;
        String result = null;
        try {
            channel = session.openChannel("exec");
            ((ChannelExec)channel).setCommand(command);
            channel.setInputStream(null);
            ((ChannelExec)channel).setErrStream(System.err);

            InputStream in=channel.getInputStream();
            channel.connect();

            StringBuilder sb = new StringBuilder();
            byte[] tmp=new byte[1024];
            while(true){
                while(in.available()>0){
                    int i=in.read(tmp, 0, 1024);
                    if(i<0)break;
                    sb.append(new String(tmp, 0, i));
                }
                if(channel.isClosed()){
                    log.debug("exit-status: " + channel.getExitStatus());
                    break;
                }
                try{Thread.sleep(1000);}catch(Exception ee){}
            }
            channel.disconnect();
            result = sb.toString();
        } catch (JSchException | IOException e) {
            if (channel != null) {
                channel.disconnect();
            }
            log.info("channel 오류 발생");
            throw new Exception();
        }

        return result;
    }

    private static Session getSession(Properties config) throws JSchException {
        Session session = new JSch().getSession(USER, HOST, PORT);
        session.setPassword(PASSWORD);
        session.setConfig(config);
        session.connect();
        return session;
    }
}
