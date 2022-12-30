import json
from typing import List, Any, Optional
from fastapi import UploadFile
default_state = json.loads('{"Rating1":{}}')
def get_defined_value(state, def_state, key):
	return state[key] if key in state else def_state[key]
class Atri:
	def __init__(self, state: Any):
		self.event_data = None
		self.event_alias = None
		global default_state
		self._setter_access_tracker = {}
		self.Rating1 = state["Rating1"]
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	def set_event(self, event):
		self.event_data = event["event_data"]
		self.event_alias = event["alias"]
		callback_name = event["callback_name"]
		comp = getattr(self, self.event_alias)
		setattr(comp, callback_name, True)
	@property
	def Rating1(self):
		self._getter_access_tracker["Rating1"] = {}
		return self._Rating1
	@Rating1.setter
	def Rating1(self, new_state):
		self._setter_access_tracker["Rating1"] = {}
		global default_state
		self._Rating1 = Rating(new_state, default_state["Rating1"])

	def _to_json_fields(self):
		return {
			"Rating1": self._Rating1,
			}


class Rating:
	def __init__(self, state, def_state):
		pass

	def _to_json_fields(self):
		return {

			}

