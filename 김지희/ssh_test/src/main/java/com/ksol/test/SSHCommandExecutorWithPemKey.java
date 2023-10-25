package com.ksol.test;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class SSHCommandExecutorWithPemKey {
    public static void main(String[] args) {
        try {
            // SSH 연결 설정
            JSch jsch = new JSch();
            String host = "원격_서버_IP_또는_호스트명";
            String user = "ubuntu";
            String privateKeyPath = "/경로/키파일.pem"; // pem 키 파일 경로

            // pem 키 파일 지정
            jsch.addIdentity(privateKeyPath);

            Session session = jsch.getSession(user, host, 22);
            session.setConfig("StrictHostKeyChecking", "no");
            session.connect();

            // 원격 서버에 셸 스크립트 명령어 전송 (이전 예제 참고)

            // 연결 종료
            session.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
