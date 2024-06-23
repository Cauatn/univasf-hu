/*
  Warnings:

  - You are about to alter the column `phone` on the `Pacient` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `room` on the `Pacient` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- CreateTable
CREATE TABLE "Preference" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacientId" TEXT NOT NULL,
    "Food" TEXT NOT NULL,
    CONSTRAINT "Preference_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Allergy" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacientId" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,
    CONSTRAINT "Allergy_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Restriction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pacientId" TEXT NOT NULL,
    "restriction" TEXT NOT NULL,
    CONSTRAINT "Restriction_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pacient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "medicalRecord" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "room" INTEGER NOT NULL,
    "treatment" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "diet" TEXT,
    "weight" REAL,
    "height" REAL,
    "caloricNecessity" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Pacient" ("adress", "createdAt", "dateOfBirth", "gender", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt") SELECT "adress", "createdAt", "dateOfBirth", "gender", "id", "medicalRecord", "name", "phone", "room", "status", "treatment", "updatedAt" FROM "Pacient";
DROP TABLE "Pacient";
ALTER TABLE "new_Pacient" RENAME TO "Pacient";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
