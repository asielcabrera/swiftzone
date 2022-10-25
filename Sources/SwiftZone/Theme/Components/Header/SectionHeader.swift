//
//  SectionHeader.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    static func sectionheader<Site: Website>(context: PublishingContext<Site>, showTitle: Bool = true) -> Node {
        return .div(
            .class("section-header float-container"),
            .if(showTitle, .h2(.text("Publicacions Recientes"))),
            .a(
                .class("browse-all"),
                .href("/posts/"),
                .text("Mostrar Todos(\(context.itemCount))")
            )
            
        )
    }
}
