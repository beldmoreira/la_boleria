CREATE TABLE "clients" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
);

CREATE TABLE "cakes" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL UNIQUE,
	"price" numeric NOT NULL,
	"image" varchar(255) NOT NULL,
	"description" text,
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
);

CREATE TABLE "orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL REFERENCES clients(id),
	"cakeId" integer NOT NULL REFERENCES cakes(id),
	"quantity" integer NOT NULL,
	"createdAt" timestamp with time zone NOT NULL,
	"totalPrice" numeric NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
);



