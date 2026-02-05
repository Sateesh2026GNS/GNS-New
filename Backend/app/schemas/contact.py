"""Contact form schema"""
from pydantic import BaseModel, Field


class ContactForm(BaseModel):
    """Contact form submission payload"""

    name: str = Field(..., min_length=1, description="Contact name")
    email: str = Field(..., min_length=1, description="Contact email address")
    message: str = Field(..., min_length=1, description="Message content")
    organization: str | None = Field(default=None, description="Organization (optional)")
    phone: str | None = Field(default=None, description="Phone number (optional)")
    inquiryType: str | None = Field(default=None, description="Type of inquiry (optional)")
