package com.example.orderservice.model;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Table(name = "t_orders")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String orderNumber;
    // each order will contain multiple or single order line items
    // so it is a one to many relationship
    @OneToMany(cascade = CascadeType.ALL)
    private List<OrderLineItems> orderLineItemsList;
}
