/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Tag } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import TagItem from "./TagItem";
import { Collection } from "@aws-amplify/ui-react";
export default function TagItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Tag,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="row"
      alignItems="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TagItemCollection")}
    >
      {(item, index) => (
        <TagItem
          tag={item}
          width="auto"
          margin="0 25px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></TagItem>
      )}
    </Collection>
  );
}
