//
//  ItemNavigator.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot

extension Node where Context == HTML.BodyContext {
    static func itemNavigator<Site: Website>(previousItem: Item<Site>?, nextItem: Item<Site>?)
        -> Node
    {
        .div(
            .class("item-navigator"),
            .table(
                .tr(
                    .if(
                        previousItem != nil,
                        .td(
                            .class("previous-item"),
                            .a(

                                .href(previousItem?.path ?? Path("")),
                                .text((previousItem?.title ?? ""))
                            )
                        ),
                        else:
                            .td(
                                .text("")
                            )

                    ),
                    .if(
                        nextItem != nil,
                        .td(
                            .class("next-item"),
                            .a(

                                .href(nextItem?.path ?? Path("")),
                                .text((nextItem?.title ?? ""))
                            )
                        ),
                        else:
                            .td(
                                .text("")
                            )
                    )
                )
            )
        )
    }
}
