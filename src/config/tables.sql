CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" serial(255) NOT NULL,
	"address" serial(255) NOT NULL,
	"phone" serial(255) NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
);

CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" serial(255) NOT NULL UNIQUE,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" TEXT(255),
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
);

CREATE TABLE "public.orders" (
	"id" serial NOT NULL,
	"clientId" serial NOT NULL,
	"cakeId" serial NOT NULL,
	"quantity" serial NOT NULL,
	"createdAt" serial NOT NULL,
	"totalPrice" serial NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
);



