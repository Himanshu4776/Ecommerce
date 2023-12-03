package com.example.orderservice.dto;

import com.example.orderservice.model.OrderLineItems;
import lombok.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderRequest {
    List<OrderLineItemsDto> orderLineItemsDtoList;
}
