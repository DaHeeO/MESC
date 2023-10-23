package mesc.mesc.global.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {
	private final JavaMailSender mailSender;
	private final TemplateEngine templateEngine;

	public void sendEmail(List<String> toUserList) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

		Context context = new Context();
		String content = templateEngine.process("mail", context);

		helper.setTo(toUserList.toArray(new String[toUserList.size()]));
		helper.setSubject("공정에 이슈가 발생했습니다.");
		helper.setText(content, true);

		mailSender.send(message);
	}


}