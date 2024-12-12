"use client";

import { DASHBOARD } from "@/constants/text";
import { Cards, FunctionalCards } from "@/components/ui/cards";
import { NewMeeting, JoinMeeting, ManageAccount } from "./meetingComponent";

export default function DashboardPage() {
  return (
    <>
      <div className="container mx-auto flex items-start justify-center min-h-[calc(100vh-200px)] p-8">
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{DASHBOARD.TITLE}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 w-full">
            <FunctionalCards children={NewMeeting()} />
            <FunctionalCards children={JoinMeeting()} />
            <FunctionalCards children={ManageAccount()} />
          </div>
        </div>
      </div>
    </>
  );
}
