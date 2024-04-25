const API_BASE_URL = "http://159.89.206.44:3000";

const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    RESET_DEFAULT_PASSWORD: "/auth/resetDefaultPassword/",
  },
  GIVE_COMMENT: "/comment/",
  GUEST: {
    REGISTER: "/guest/register",
    GET_FACULTY: "/guest/faculties/",
  },
  ADMIN: {
    ACCOUNTS: "/admin/viewAllAccount",
    CREATE_ACCOUNTS: "/admin/registerForUser",
    EDIT_ACCOUNT: "/admin/editUser/",
    FACULTIES: "/admin/viewFaculties",
    DELETE_FACULTIES: "/admin/deleteFaculty/",
    UPDATE_FACULTIES: "/admin/updateFaculty/",
    CREATE_FACULTIES: "/admin/createFaculty",
    ACADEMIC_YEARS: "/admin/viewAcademicYears",
    DELETE_ACADEMIC_YEARS: "/admin/deleteAcademicYear/",
    UPDATE_ACADEMIC_YEARS: "/admin/updateAcademicYear/",
    CREATE_ACADEMIC_YEARS: "/admin/createAcademicYear/",
    VIEW_ADMIN_PROFILE: "/admin/viewProfile/",
  },
  USER: {
    CONTRIBUTIONS: "/user/viewMyContributions/",
    SEARCH_CONTRIBUTIONS: "/user/viewMyContributions?title=",
    UPLOAD_CONTRIBUTION: "/user/uploadContribution",
    EDIT_CONTRIBUTION: "/user/editMyContribution/",
    VIEW_PROFILE: "/user/viewProfile",
    UPDATE_PROFILE: "/user/editProfile/",
    SEND_OTP: "/user/otp",
    RESET_PASSWORD: "/user/resetPassword",
    DELETE_CONTRIBUTION: "/user/deleteContribution/",
    VIEW_COORDINATOR_BY_FACULTY: "/user/viewCoordinator/",
    GET_PUBLISHED_CONTRIBUTION: "/user/getPublishContributions/",
  },
  MANAGER: {
    CHOSEN_CONTRIBUTIONS: "/manager/getChosenContributions",
    DOWNLOAD_CONTRIBUTIONS: "/manager/downloadContribution",
    PUBLISH_CONTRIBUTION: "/manager/publishContribution/",
    STATS_BY_FACULTY_AND_YEAR: "/manager/getContributionsStatsByFacultyAndYear",
    PERCENTAGE_BY_FACULTY: "/manager/getContributionPercentageByFaculty",
    COUNT_CONTRIBUTION: "/manager/CountContributionsStats",
    EXCEPTION_REPORTS: "/manager/viewExceptionReports",
    TOTAL_CONTRIBUTIONS_TODAY: "/manager/viewAllNewContributionsToday",
    TOTAL_CONTRIBUTIONS: "/manager/getTotalContribution",
    TOTAL_COORDINATORS_IN_FACULTY: "/manager/totalCoordinators",
  },
  COORDINATOR: {
    VIEW_ALL_CONTRIBUTION: "/coordinator/viewContribution",
    SEARCH_CONTRIBUTIONS: "/coordinator/viewContribution?title=",
    CHOOSE_CONTRIBUTION: "/coordinator/chooseContribution/",
    VIEW_STUDENT_BY_FACULTY: "/coordinator/getAllStudentInFaculty",
    GET_NOTIFICATION_COUNT: "/coordinator/countNotifications/",
    VIEW_NOTIFICATIONS: "/coordinator/getAllNotifications",
  },
};

export { API_BASE_URL, API_ENDPOINTS };
