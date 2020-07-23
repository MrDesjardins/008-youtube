import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  houses: Array<House>;
  people?: Maybe<Array<Person>>;
};


export type QueryHousesArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryPeopleArgs = {
  ids: Array<Scalars['Int']>;
};

export type House = {
  __typename?: 'House';
  id: Scalars['Int'];
  squarefeet: Scalars['Int'];
  numberOfBedrooms: Scalars['Int'];
  onSale: Scalars['Boolean'];
  isRental?: Maybe<Scalars['Boolean']>;
  Owner: Person;
  address: HouseAddress;
};

export type HouseAddress = {
  __typename?: 'HouseAddress';
  streetname?: Maybe<Scalars['String']>;
  housenumber?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  id: Scalars['Int'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  fullname: Scalars['String'];
  houses?: Maybe<Array<Maybe<House>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Partial<Scalars['Int']>>;
  House: ResolverTypeWrapper<Partial<House>>;
  Boolean: ResolverTypeWrapper<Partial<Scalars['Boolean']>>;
  HouseAddress: ResolverTypeWrapper<Partial<HouseAddress>>;
  String: ResolverTypeWrapper<Partial<Scalars['String']>>;
  Person: ResolverTypeWrapper<Partial<Person>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Int: Partial<Scalars['Int']>;
  House: Partial<House>;
  Boolean: Partial<Scalars['Boolean']>;
  HouseAddress: Partial<HouseAddress>;
  String: Partial<Scalars['String']>;
  Person: Partial<Person>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  houses?: Resolver<Array<ResolversTypes['House']>, ParentType, ContextType, RequireFields<QueryHousesArgs, 'ids'>>;
  people?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType, RequireFields<QueryPeopleArgs, 'ids'>>;
};

export type HouseResolvers<ContextType = any, ParentType extends ResolversParentTypes['House'] = ResolversParentTypes['House']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  squarefeet?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  numberOfBedrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  onSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isRental?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  Owner?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['HouseAddress'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type HouseAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['HouseAddress'] = ResolversParentTypes['HouseAddress']> = {
  streetname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  housenumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fullname?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  houses?: Resolver<Maybe<Array<Maybe<ResolversTypes['House']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>;
  House?: HouseResolvers<ContextType>;
  HouseAddress?: HouseAddressResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
