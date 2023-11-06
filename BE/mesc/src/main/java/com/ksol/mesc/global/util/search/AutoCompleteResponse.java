package com.ksol.mesc.global.util.search;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AutoCompleteResponse {
	private List<String> autocompleteList;
}
