package com.ksol.mesc.domain.user.service;

import java.util.List;

import org.springframework.core.io.ClassPathResource;
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

	public void sendEmail(List<String> toUserList, String subject, String content) throws MessagingException {
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

		Context context = new Context();
		context.setVariable("content", content);
		String mailContent = templateEngine.process("mail", context);
		helper.setSubject("[MESC] " + subject);
		helper.setText(mailContent, true);
		helper.addInline("EmailHeader", new ClassPathResource("static/images/HeaderImage.png"));

		helper.setTo(toUserList.toArray(new String[toUserList.size()]));

		mailSender.send(message);
	}


}