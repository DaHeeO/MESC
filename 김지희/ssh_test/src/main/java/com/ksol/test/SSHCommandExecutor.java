package com.ksol.test;

import java.io.InputStream;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;

public class SSHCommandExecutor {
    public static void main(String[] args) {
        try {
            // SSH 연결 설정
            JSch jsch = new JSch();
            String host = "원격_서버_IP_또는_호스트명";
            String user = "SSH_사용자";
            String password = "SSH_비밀번호";

            Session session = jsch.getSession(user, host, 22);
            session.setPassword(password);
            session.setConfig("StrictHostKeyChecking", "no");
            session.connect();

            // 원격 서버에 셸 스크립트 명령어 전송
            String command = "ls -l"; // 예시: 현재 디렉토리의 파일 목록을 보는 명령어

            Channel channel = session.openChannel("exec");
            ((ChannelExec) channel).setCommand(command);

            channel.setInputStream(null);
            ((ChannelExec) channel).setErrStream(System.err);

            InputStream in = channel.getInputStream();
            channel.connect();

            // 명령어 실행 결과 읽기
            byte[] tmp = new byte[1024];
            while (true) {
                while (in.available() > 0) {
                    int i = in.read(tmp, 0, 1024);
                    if (i < 0) break;
                    System.out.print(new String(tmp, 0, i));
                }
                if (channel.isClosed()) {
                    if (in.available() > 0) continue;
                    System.out.println("Exit status: " + channel.getExitStatus());
                    break;
                }
            }

            // 연결 종료
            channel.disconnect();
            session.disconnect();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
