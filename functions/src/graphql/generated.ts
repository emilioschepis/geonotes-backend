import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  geography: any;
  geometry: any;
  timestamptz: any;
  uuid: any;
};


export type CreateNoteOutput = {
  __typename?: 'CreateNoteOutput';
  id: Scalars['uuid'];
  /** An object relationship */
  note: Note;
};

export type GetNoteOutput = {
  __typename?: 'GetNoteOutput';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  username: Scalars['String'];
  view_count: Scalars['Int'];
};

export type GetNotesOutput = {
  __typename?: 'GetNotesOutput';
  content: Scalars['String'];
  id: Scalars['uuid'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};


export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>;
  _eq?: Maybe<Scalars['geography']>;
  _gt?: Maybe<Scalars['geography']>;
  _gte?: Maybe<Scalars['geography']>;
  _in?: Maybe<Array<Scalars['geography']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geography']>;
  _lte?: Maybe<Scalars['geography']>;
  _neq?: Maybe<Scalars['geography']>;
  _nin?: Maybe<Array<Scalars['geography']>>;
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>;
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>;
};


export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>;
  _eq?: Maybe<Scalars['geometry']>;
  _gt?: Maybe<Scalars['geometry']>;
  _gte?: Maybe<Scalars['geometry']>;
  _in?: Maybe<Array<Scalars['geometry']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['geometry']>;
  _lte?: Maybe<Scalars['geometry']>;
  _neq?: Maybe<Scalars['geometry']>;
  _nin?: Maybe<Array<Scalars['geometry']>>;
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>;
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>;
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>;
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>;
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>;
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>;
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>;
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>;
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>;
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  create_note: CreateNoteOutput;
  /** insert data into the table: "note" */
  insert_note?: Maybe<Note_Mutation_Response>;
  /** insert a single row into the table: "note" */
  insert_note_one?: Maybe<Note>;
  /** insert data into the table: "note_view" */
  insert_note_view?: Maybe<Note_View_Mutation_Response>;
  /** insert a single row into the table: "note_view" */
  insert_note_view_one?: Maybe<Note_View>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "note_view" */
  update_note_view?: Maybe<Note_View_Mutation_Response>;
  /** update single row of the table: "note_view" */
  update_note_view_by_pk?: Maybe<Note_View>;
};


/** mutation root */
export type Mutation_RootCreate_NoteArgs = {
  content: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** mutation root */
export type Mutation_RootInsert_NoteArgs = {
  objects: Array<Note_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Note_OneArgs = {
  object: Note_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Note_ViewArgs = {
  objects: Array<Note_View_Insert_Input>;
  on_conflict?: Maybe<Note_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Note_View_OneArgs = {
  object: Note_View_Insert_Input;
  on_conflict?: Maybe<Note_View_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Note_ViewArgs = {
  _set?: Maybe<Note_View_Set_Input>;
  where: Note_View_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Note_View_By_PkArgs = {
  _set?: Maybe<Note_View_Set_Input>;
  pk_columns: Note_View_Pk_Columns_Input;
};

/** columns and relationships of "note" */
export type Note = {
  __typename?: 'note';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  location: Scalars['geography'];
  map_image_url?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: User;
  user_id: Scalars['String'];
  /** An array relationship */
  views: Array<Note_View>;
  /** An aggregate relationship */
  views_aggregate: Note_View_Aggregate;
};


/** columns and relationships of "note" */
export type NoteViewsArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};


/** columns and relationships of "note" */
export type NoteViews_AggregateArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "note". All fields are combined with a logical 'AND'. */
export type Note_Bool_Exp = {
  _and?: Maybe<Array<Note_Bool_Exp>>;
  _not?: Maybe<Note_Bool_Exp>;
  _or?: Maybe<Array<Note_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  deleted_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  location?: Maybe<Geography_Comparison_Exp>;
  map_image_url?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
  views?: Maybe<Note_View_Bool_Exp>;
};

/** input type for inserting data into table "note" */
export type Note_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  location?: Maybe<Scalars['geography']>;
  map_image_url?: Maybe<Scalars['String']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
  views?: Maybe<Note_View_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "note" */
export type Note_Mutation_Response = {
  __typename?: 'note_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Note>;
};

/** input type for inserting object relation for remote table "note" */
export type Note_Obj_Rel_Insert_Input = {
  data: Note_Insert_Input;
};

/** Ordering options when selecting data from "note". */
export type Note_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  deleted_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  map_image_url?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
  views_aggregate?: Maybe<Note_View_Aggregate_Order_By>;
};

/** select columns of table "note" */
export enum Note_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  MapImageUrl = 'map_image_url',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "note_view" */
export type Note_View = {
  __typename?: 'note_view';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  note: Note;
  note_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** aggregated selection of "note_view" */
export type Note_View_Aggregate = {
  __typename?: 'note_view_aggregate';
  aggregate?: Maybe<Note_View_Aggregate_Fields>;
  nodes: Array<Note_View>;
};

/** aggregate fields of "note_view" */
export type Note_View_Aggregate_Fields = {
  __typename?: 'note_view_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Note_View_Max_Fields>;
  min?: Maybe<Note_View_Min_Fields>;
};


/** aggregate fields of "note_view" */
export type Note_View_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Note_View_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "note_view" */
export type Note_View_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Note_View_Max_Order_By>;
  min?: Maybe<Note_View_Min_Order_By>;
};

/** input type for inserting array relation for remote table "note_view" */
export type Note_View_Arr_Rel_Insert_Input = {
  data: Array<Note_View_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Note_View_On_Conflict>;
};

/** Boolean expression to filter rows from the table "note_view". All fields are combined with a logical 'AND'. */
export type Note_View_Bool_Exp = {
  _and?: Maybe<Array<Note_View_Bool_Exp>>;
  _not?: Maybe<Note_View_Bool_Exp>;
  _or?: Maybe<Array<Note_View_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  note?: Maybe<Note_Bool_Exp>;
  note_id?: Maybe<Uuid_Comparison_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "note_view" */
export enum Note_View_Constraint {
  /** unique or primary key constraint */
  NoteViewPkey = 'note_view_pkey'
}

/** input type for inserting data into table "note_view" */
export type Note_View_Insert_Input = {
  note?: Maybe<Note_Obj_Rel_Insert_Input>;
  note_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Note_View_Max_Fields = {
  __typename?: 'note_view_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  note_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "note_view" */
export type Note_View_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Note_View_Min_Fields = {
  __typename?: 'note_view_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  note_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "note_view" */
export type Note_View_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  note_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "note_view" */
export type Note_View_Mutation_Response = {
  __typename?: 'note_view_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Note_View>;
};

/** on conflict condition type for table "note_view" */
export type Note_View_On_Conflict = {
  constraint: Note_View_Constraint;
  update_columns?: Array<Note_View_Update_Column>;
  where?: Maybe<Note_View_Bool_Exp>;
};

/** Ordering options when selecting data from "note_view". */
export type Note_View_Order_By = {
  created_at?: Maybe<Order_By>;
  note?: Maybe<Note_Order_By>;
  note_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: note_view */
export type Note_View_Pk_Columns_Input = {
  note_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "note_view" */
export enum Note_View_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  NoteId = 'note_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "note_view" */
export type Note_View_Set_Input = {
  note_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "note_view" */
export enum Note_View_Update_Column {
  /** column name */
  NoteId = 'note_id',
  /** column name */
  UserId = 'user_id'
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  get_note: GetNoteOutput;
  get_notes: Array<GetNotesOutput>;
  /** fetch data from the table: "note" */
  note: Array<Note>;
  /** fetch data from the table: "note" using primary key columns */
  note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "note_view" */
  note_view: Array<Note_View>;
  /** fetch aggregated fields from the table: "note_view" */
  note_view_aggregate: Note_View_Aggregate;
  /** fetch data from the table: "note_view" using primary key columns */
  note_view_by_pk?: Maybe<Note_View>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootGet_NoteArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGet_NotesArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


export type Query_RootNoteArgs = {
  distinct_on?: Maybe<Array<Note_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_Order_By>>;
  where?: Maybe<Note_Bool_Exp>;
};


export type Query_RootNote_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootNote_ViewArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};


export type Query_RootNote_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};


export type Query_RootNote_View_By_PkArgs = {
  note_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float'];
  from: Scalars['geography'];
  use_spheroid?: Maybe<Scalars['Boolean']>;
};

export type St_D_Within_Input = {
  distance: Scalars['Float'];
  from: Scalars['geometry'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "note" */
  note: Array<Note>;
  /** fetch data from the table: "note" using primary key columns */
  note_by_pk?: Maybe<Note>;
  /** fetch data from the table: "note_view" */
  note_view: Array<Note_View>;
  /** fetch aggregated fields from the table: "note_view" */
  note_view_aggregate: Note_View_Aggregate;
  /** fetch data from the table: "note_view" using primary key columns */
  note_view_by_pk?: Maybe<Note_View>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootNoteArgs = {
  distinct_on?: Maybe<Array<Note_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_Order_By>>;
  where?: Maybe<Note_Bool_Exp>;
};


export type Subscription_RootNote_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootNote_ViewArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};


export type Subscription_RootNote_View_AggregateArgs = {
  distinct_on?: Maybe<Array<Note_View_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Note_View_Order_By>>;
  where?: Maybe<Note_View_Bool_Exp>;
};


export type Subscription_RootNote_View_By_PkArgs = {
  note_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['String'];
  username: Scalars['String'];
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Username = 'username'
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetNoteActionQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetNoteActionQuery = (
  { __typename?: 'query_root' }
  & { get_note: (
    { __typename?: 'GetNoteOutput' }
    & Pick<GetNoteOutput, 'id' | 'created_at' | 'content' | 'username' | 'view_count'>
  ) }
);

export type GetNotesActionQueryVariables = Exact<{
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}>;


export type GetNotesActionQuery = (
  { __typename?: 'query_root' }
  & { get_notes: Array<(
    { __typename?: 'GetNotesOutput' }
    & Pick<GetNotesOutput, 'id' | 'latitude' | 'longitude' | 'content'>
  )> }
);

export type CreateNoteActionMutationVariables = Exact<{
  content: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
}>;


export type CreateNoteActionMutation = (
  { __typename?: 'mutation_root' }
  & { create_note: (
    { __typename?: 'CreateNoteOutput' }
    & Pick<CreateNoteOutput, 'id'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { user?: Maybe<(
    { __typename?: 'user' }
    & { createdAt: User['created_at'] }
  )> }
);

export type CreateNoteMutationVariables = Exact<{
  id: Scalars['uuid'];
  user_id: Scalars['String'];
  content: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  map_image_url?: Maybe<Scalars['String']>;
}>;


export type CreateNoteMutation = (
  { __typename?: 'mutation_root' }
  & { note?: Maybe<(
    { __typename?: 'note' }
    & Pick<Note, 'id'>
  )> }
);

export type RegisterViewMutationVariables = Exact<{
  user_id: Scalars['String'];
  note_id: Scalars['uuid'];
}>;


export type RegisterViewMutation = (
  { __typename?: 'mutation_root' }
  & { view?: Maybe<(
    { __typename?: 'note_view' }
    & Pick<Note_View, 'note_id'>
  )> }
);

export type NoteQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type NoteQuery = (
  { __typename?: 'query_root' }
  & { note?: Maybe<(
    { __typename?: 'note' }
    & Pick<Note, 'id' | 'created_at' | 'content'>
    & { user: (
      { __typename?: 'user' }
      & Pick<User, 'username'>
    ), views_aggregate: (
      { __typename?: 'note_view_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'note_view_aggregate_fields' }
        & Pick<Note_View_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type NotesQueryVariables = Exact<{
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  distance: Scalars['Float'];
}>;


export type NotesQuery = (
  { __typename?: 'query_root' }
  & { notes: Array<(
    { __typename?: 'note' }
    & Pick<Note, 'id' | 'content' | 'location'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type UsernamesQueryVariables = Exact<{
  like: Scalars['String'];
}>;


export type UsernamesQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'user' }
    & Pick<User, 'username'>
  )> }
);


export const GetNoteActionDocument = gql`
    query GetNoteAction($id: uuid!) {
  get_note(id: $id) {
    id
    created_at
    content
    username
    view_count
  }
}
    `;
export const GetNotesActionDocument = gql`
    query GetNotesAction($latitude: Float!, $longitude: Float!) {
  get_notes(latitude: $latitude, longitude: $longitude) {
    id
    latitude
    longitude
    content
  }
}
    `;
export const CreateNoteActionDocument = gql`
    mutation CreateNoteAction($content: String!, $latitude: Float!, $longitude: Float!) {
  create_note(content: $content, latitude: $latitude, longitude: $longitude) {
    id
  }
}
    `;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String!, $username: String!) {
  user: insert_user_one(object: {id: $id, email: $email, username: $username}) {
    createdAt: created_at
  }
}
    `;
export const CreateNoteDocument = gql`
    mutation CreateNote($id: uuid!, $user_id: String!, $content: String!, $latitude: Float!, $longitude: Float!, $map_image_url: String) {
  note: insert_note_one(
    object: {id: $id, user_id: $user_id, content: $content, location: {type: "Point", coordinates: [$longitude, $latitude]}, map_image_url: $map_image_url}
  ) {
    id
  }
}
    `;
export const RegisterViewDocument = gql`
    mutation RegisterView($user_id: String!, $note_id: uuid!) {
  view: insert_note_view_one(
    object: {user_id: $user_id, note_id: $note_id}
    on_conflict: {constraint: note_view_pkey, update_columns: []}
  ) {
    note_id
  }
}
    `;
export const NoteDocument = gql`
    query Note($id: uuid!) {
  note: note_by_pk(id: $id) {
    id
    created_at
    content
    user {
      username
    }
    views_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;
export const NotesDocument = gql`
    query Notes($latitude: Float!, $longitude: Float!, $distance: Float!) {
  notes: note(
    where: {_and: {location: {_st_d_within: {distance: $distance, from: {type: "Point", coordinates: [$longitude, $latitude]}}}}, deleted_at: {_is_null: true}}
  ) {
    id
    content
    location
  }
}
    `;
export const UsersDocument = gql`
    query Users {
  users: user {
    id
    email
  }
}
    `;
export const UsernamesDocument = gql`
    query Usernames($like: String!) {
  users: user(where: {username: {_ilike: $like}}) {
    username
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetNoteAction(variables: GetNoteActionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNoteActionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNoteActionQuery>(GetNoteActionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNoteAction');
    },
    GetNotesAction(variables: GetNotesActionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetNotesActionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNotesActionQuery>(GetNotesActionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNotesAction');
    },
    CreateNoteAction(variables: CreateNoteActionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateNoteActionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateNoteActionMutation>(CreateNoteActionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateNoteAction');
    },
    CreateUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser');
    },
    CreateNote(variables: CreateNoteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateNoteMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateNoteMutation>(CreateNoteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateNote');
    },
    RegisterView(variables: RegisterViewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RegisterViewMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterViewMutation>(RegisterViewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RegisterView');
    },
    Note(variables: NoteQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NoteQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NoteQuery>(NoteDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Note');
    },
    Notes(variables: NotesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NotesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NotesQuery>(NotesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Notes');
    },
    Users(variables?: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Users');
    },
    Usernames(variables: UsernamesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsernamesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsernamesQuery>(UsernamesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Usernames');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;