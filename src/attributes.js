const attributes = {
	imageSize: {
		type: "string",
		default: "thumbnail",
	},
	imageUrl: {
		type: "string",
	},
	imageId: {
		type: "number",
	},
	imageHeight: {
		type: "number",
		default: 150,
	},
	imageWidth: {
		type: "number",
		default: 150,
	},
	customSize: {
		type: "boolean",
		default: false,
	},
	borderRadius: {
		type: "number",
		default: 0,
	},
	memberName: {
		type: "text",
		selector: ".eb-member-name",
		default: "John Doe",
	},
	jobTitle: {
		type: "text",
		selector: ".eb-job-title",
		default: "Software Engineer",
	},
	jobDetails: {
		type: "text",
		selector: ".eb-job-details",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	contactAlign: {
		type: "string",
		default: "center",
	},
	nameColor: {
		type: "string",
	},
	jobTitleColor: {
		type: "string",
	},
	jobDetailsColor: {
		type: "string",
	},
	nameFontSize: {
		type: "number",
	},
	nameFontSizeUnit: {
		type: "string",
		default: "px",
	},
	jobTitleFontSize: {
		type: "number",
	},
	jobTitleFontSizeUnit: {
		type: "string",
		default: "px",
	},
	jobDetailsFontSize: {
		type: "number",
	},
	socialIconSize: {
		type: "number",
	},
	socialProfiles: {
		type: "array",
		default: [
			{
				icon: "facebook",
				link: "#",
				isExpanded: false,
			},
			{
				icon: "twitter",
				link: "#",
				isExpanded: false,
			},
			{
				icon: "linkedin",
				link: "#",
				isExpanded: false,
			},
			{
				icon: "instagram",
				link: "#",
				isExpanded: false,
			},
			{
				icon: "github",
				link: "#",
				isExpanded: false,
			},
		],
	},
	socialIconSpacing: {
		type: "number",
	},
	socialIconColor: {
		type: "string",
	},
	socialIconAlign: {
		type: "string",
		default: "center",
	},
	linkedMargin: {
		type: "boolean",
		default: "false",
	},
	marginTop: {
		type: "number",
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},
	linkedPadding: {
		type: "boolean",
	},
	paddingTop: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	shadowColor: {
		type: "string",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	borderWidth: {
		type: "number",
	},
	borderStyle: {
		type: "string",
		default: "solid",
	},
	borderColor: {
		type: "string",
	},
	nameUnit: {
		type: "string",
		default: "px",
	},
	jobTitleUnit: {
		type: "string",
		default: "px",
	},
	jobDetailsUnit: {
		type: "string",
		default: "px",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	iconSizeUnit: {
		type: "string",
		default: "px",
	},
	iconSpaceUnit: {
		tyepe: "string",
		default: "px",
	},
	nameFontFamily: {
		type: "string",
	},
	nameFontWeight: {
		type: "string",
		default: "normal",
	},
	nameTextDecoration: {
		type: "string",
	},
	nameTextTransform: {
		type: "string",
	},
	nameLineHeight: {
		type: "number",
	},
	nameLineHeightUnit: {
		type: "string",
		default: "px",
	},
	nameLetterSpacing: {
		type: "number",
	},
	nameLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	jobTitleFontFamily: {
		type: "string",
	},
	jobTitleFontWeight: {
		type: "string",
		default: "normal",
	},
	jobTitleTextDecoration: {
		type: "string",
	},
	jobTitleTextTransform: {
		type: "string",
	},
	jobTitleLineHeight: {
		type: "number",
	},
	jobTitleLineHeightUnit: {
		type: "string",
		default: "px",
	},
	jobTitleLetterSpacing: {
		type: "number",
	},
	jobTitleLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	detailsFontFamily: {
		type: "string",
	},
	detailsFontSizeUnit: {
		type: "string",
		default: "px",
	},
	detailsFontWeight: {
		type: "string",
		default: "normal",
	},
	detailsTextDecoration: {
		type: "string",
	},
	detailsTextTransform: {
		type: "string",
	},
	detailsLineHeight: {
		type: "number",
	},
	detailsLineHeightUnit: {
		type: "string",
		default: "px",
	},
	detailsLetterSpacing: {
		type: "number",
	},
	detailsLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
};

export default attributes;
