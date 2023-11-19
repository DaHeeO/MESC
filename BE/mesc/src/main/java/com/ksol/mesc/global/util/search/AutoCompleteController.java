package com.ksol.mesc.global.util.search;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/mesc/autocomplete")
@RequiredArgsConstructor
public class AutoCompleteController {

	private final AutoCompleteService autocompleteService;

	@GetMapping
	public List<String> getSql(@RequestParam String prefix) {
		return autocompleteService.getSql(prefix);
	}

	@GetMapping("/table")
	public List<String> getTable(@RequestParam String prefix) {
		return autocompleteService.getTable(prefix);
	}

	@GetMapping("/column")
	public List<String> getColumn(@RequestParam String prefix) {
		return autocompleteService.getColumn(prefix);
	}
}
