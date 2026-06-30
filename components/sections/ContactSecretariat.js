import React from "react";
import { collegeConfig } from "@/data/mockData";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSecretariat = () => {
  return (
    <div className="bg-brand-primary text-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-xl font-bold mb-6">Contact Secretariat</h3>
      <ul className="space-y-6">
        <li className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-1">
              Address
            </h4>
            <p className="text-sm">{collegeConfig.contact.address}</p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-1">
              Phone (Registrar)
            </h4>
            <p className="text-sm">{collegeConfig.contact.phone}</p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-1">
              Email
            </h4>
            <p className="text-sm">{collegeConfig.contact.email}</p>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-sm text-slate-300 uppercase tracking-wider mb-1">
              Office Hours
            </h4>
            <p className="text-sm">
              Monday - Saturday
              <br />
              08:00 AM - 02:00 PM
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ContactSecretariat;
