import { DASHBOARD } from "@/constants/text";
import { Video, MonitorSpeaker, Settings, Calendar, Clock } from "lucide-react";
import { Button } from "@nextui-org/react";

const iconMap = {
  Video: Video,
  MonitorSpeaker: MonitorSpeaker,
  Settings: Settings,
  Calendar: Calendar,
  Clock: Clock,
};

export function NewMeeting() {
  const { NEW_MEETING } = DASHBOARD;
  const Icon = iconMap[NEW_MEETING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{NEW_MEETING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {NEW_MEETING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}

export function JoinMeeting() {
  const { JOIN_MEETING } = DASHBOARD;
  const Icon = iconMap[JOIN_MEETING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{JOIN_MEETING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {JOIN_MEETING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}

export function ManageAccount() {
  const { ACCOUNT_SETTING } = DASHBOARD;
  const Icon = iconMap[ACCOUNT_SETTING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{ACCOUNT_SETTING.TITLE}</h3>
      </div>
      <div>
        <Button size="md" variant="solid" className="rounded-lg">
          {ACCOUNT_SETTING.BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}

export function ScheduleMeeting() {
  const { SCHEDULE_MEETING } = DASHBOARD;
  const Icon = iconMap[SCHEDULE_MEETING.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{SCHEDULE_MEETING.TITLE}</h3>
      </div>
      <div>
        <p>{SCHEDULE_MEETING.CONTENT.replace("{0}", "3")}</p>
      </div>
      <div>
        <div className="mt-4 space-y-3 min-h-[300px]">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Weekly Team Sync</h4>
              <p className="text-sm text-gray-500">Today, 2:00 PM - 3:00 PM</p>
            </div>
            <Button size="sm" variant="solid" className="rounded-lg">
              Join
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Project Review</h4>
              <p className="text-sm text-gray-500">Today, 4:30 PM - 5:30 PM</p>
            </div>
            <Button size="sm" variant="solid" className="rounded-lg">
              Join
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Client Meeting</h4>
              <p className="text-sm text-gray-500">Today, 6:00 PM - 7:00 PM</p>
            </div>
            <Button size="sm" variant="solid" className="rounded-lg">
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MeetingHistory() {
  const { MEETING_HISTORY } = DASHBOARD;
  const Icon = iconMap[MEETING_HISTORY.ICON as keyof typeof iconMap];
  return (
    <div>
      <div className="flex items-center justify-start space-x-4 mb-4">
        <Icon size={40} />
        <h3>{MEETING_HISTORY.TITLE}</h3>
      </div>
      <div>
        <p>{MEETING_HISTORY.CONTENT.replace("{0}", "3")}</p>
      </div>
      <div>
        <div className="mt-4 space-y-3 min-h-[300px]">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Product Launch Meeting</h4>
              <p className="text-sm text-gray-500">
                Dec 8, 2024, 10:00 AM - 11:30 AM
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Quarterly Review</h4>
              <p className="text-sm text-gray-500">
                Dec 5, 2024, 2:00 PM - 4:00 PM
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <h4 className="font-medium">Team Planning Session</h4>
              <p className="text-sm text-gray-500">
                Nov 30, 2024, 1:00 PM - 2:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
