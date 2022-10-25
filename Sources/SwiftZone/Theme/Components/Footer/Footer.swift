//
//  Footer.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Foundation
import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    static func footer<T: Website>(for site: T) -> Node {
        let formatter = DateFormatter()
        formatter.dateFormat = "yyyy"
        return .footer(
            .p(
                .text("Copyright &copy; Asiel Cabrera \(formatter.string(from: Date())) ")
            ),
            .p(
                .text("Generated using "),
                .a(
                    .text("Publish"),
                    .href("https://github.com/johnsundell/publish")
                )
            ),
            .ul(
                .li(
                    .a(
                        .text("Twitter"),
                        .href("https://twitter.com/asiel_cabrera")
                    )),
                .li(
                    .a(
                        .text("Github"),
                        .href("https://github.com/asielcabrera/")
                    )
                ),
                .li(
                    .a(
                        .text("RSS"),
                        .href("/feed.rss")
                    )
                )
                
            )
            //            ,
            //            .raw(google)
        )
    }
}

